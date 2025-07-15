import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import { tikzToSvg } from '@/utils/tikz-to-svg';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      message: 'Method not allowed',
      details: 'Only POST requests are accepted'
    });
  }

  const { tikzCode, filename } = req.body;

  if (!tikzCode || !filename) {
    return res.status(400).json({ 
      message: 'Missing required parameters',
      details: !tikzCode ? 'tikzCode is required' : 'filename is required'
    });
  }

  const outputPath = path.join(process.cwd(), 'public', 'diagrams', `${filename}.svg`);
  const texFile = path.join(process.cwd(), 'tmp', `${filename}.tex`);

  try {
    // Ensure directories exist
    fs.mkdirSync(path.dirname(texFile), { recursive: true });
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    // Write the TeX file
    fs.writeFileSync(texFile, tikzCode);

    await tikzToSvg(texFile, outputPath);

    res.status(200).json({
      url: `/diagrams/${filename}.svg`
    });
  } catch (error) {
    console.error('Error processing TikZ:', error);
    res.status(500).json({
      message: 'Failed to generate diagram',
      details: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  } finally {
    // Clean up temporary .tex file
    try {
      fs.unlinkSync(texFile);
    } catch (err) {
      console.error('Error deleting temporary .tex file:', err);
    }
  }
}
