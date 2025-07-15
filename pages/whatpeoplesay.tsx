
import React from 'react';
import styles from '@/styles/whatpeoplesayPage.module.css'; // Make sure you have this CSS file from our previous chat

// Your blog posts go here inside this array
const posts = [
  {
    id: 2,
    title: 'A freind - Anonymous',
    date: '2025-07-1',
    content: (
      <>
        <p>
          Omar is simply diffrent. He does what he think is right with confidence. When he speeks, you can feel the passion and energy in his words. But he sometimes drifts away pushing limits in an inhealthy way just to finish his work, and that is not good. Maybe this is the only thing he knows it's not correct but still doing it.
        </p>
      </>
    ),
  },
  {
    id: 1,
    title: 'Cousin - Anonymous',
    date: '2025-06-24',
    content: (
      <p>
        When we are at the family's home, I find him sitting quitely ,ost of the time whether doing something or thinking about something. But when he starts to talk everything starts to change, it becoms more freindly and energitic. One time GrandPa told us to lower our laughing voices', and someone said sorry you have to make Omar leaves us first.
      </p>
    ),
  },
];

// This is the React component that creates your page
const whatpeoplesayPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Whatpeoplesay</h1>
        <p className={styles.pageSubtitle}>
          I don't care what other people think as long as I am convinced, I am doing the right thing. But it's nice to see what people think abput a person to get a small glimbse abput what you are gonna see. You can check the contact page to share your thoughts about me.
        </p>
      </div>

      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postDate}>{post.date}</p>
            <div className={styles.postContent}>{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default whatpeoplesayPage;