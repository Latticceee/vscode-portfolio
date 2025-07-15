const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

async function tikzToSvg(texFile, outputPath) {
  try {
    // Get the directory paths
    const tmpDir = path.dirname(texFile);
    const pdfFile = texFile.replace('.tex', '.pdf');
    const baseName = path.basename(texFile, '.tex');
    
    // Add necessary packages and settings
    const texContent = `\\documentclass[border=5pt]{standalone}
\\usepackage{tikz}
\\usepackage{xcolor}
\\usetikzlibrary{decorations.pathreplacing}
\\usetikzlibrary{decorations.markings}
\\begin{document}
${await fs.readFile(texFile, 'utf8')}
\\end{document}`;

    // Write modified content
    await fs.writeFile(texFile, texContent);
    
    // Compile to PDF with detailed error capturing
    const pdfLatexOutput = await new Promise((resolve, reject) => {
      exec(`cd "${tmpDir}" && pdflatex -interaction=nonstopmode -halt-on-error "${baseName}.tex"`, 
        { maxBuffer: 1024 * 1024 }, // Increase buffer size
        (error, stdout, stderr) => {
          if (error) {
            console.error('LaTeX Error Output:', stdout);
            console.error('LaTeX Error:', error);
            reject(new Error(`LaTeX compilation failed: ${stdout}`));
          } else {
            resolve(stdout);
          }
        }
      );
    });

    // Check if PDF was actually created
    try {
      await fs.access(pdfFile);
    } catch (error) {
      throw new Error('PDF file was not created. LaTeX compilation may have failed silently.');
    }

    // Convert PDF to SVG
    const pdf2svgOutput = await new Promise((resolve, reject) => {
      exec(`pdf2svg "${pdfFile}" "${outputPath}"`, (error, stdout, stderr) => {
        if (error) {
          console.error('PDF2SVG Error:', stderr);
          reject(new Error(`PDF to SVG conversion failed: ${stderr}`));
        } else {
          resolve(stdout);
        }
      });
    });

    // Verify SVG was created
    try {
      await fs.access(outputPath);
    } catch (error) {
      throw new Error('SVG file was not created. Conversion may have failed silently.');
    }

    // Clean up temporary files
    try {
      await fs.unlink(pdfFile);
      const auxFile = texFile.replace('.tex', '.aux');
      const logFile = texFile.replace('.tex', '.log');
      await Promise.all([
        fs.unlink(auxFile).catch(() => {}),
        fs.unlink(logFile).catch(() => {})
      ]);
    } catch (err) {
      console.error('Cleanup error:', err);
      // Don't throw for cleanup errors
    }
    
    return true;
  } catch (error) {
    console.error('TikZ to SVG conversion error:', error);
    throw error; // Propagate the error with details
  }
}

module.exports = { tikzToSvg };
