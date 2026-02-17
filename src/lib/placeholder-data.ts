export const user = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatarUrl: 'https://picsum.photos/seed/1/100/100',
  redditUsername: 'alex_redditor',
};

export const earnings = {
  total: 425.50,
  monthly: [
    { month: 'Jan', earnings: 50 },
    { month: 'Feb', earnings: 75 },
    { month: 'Mar', earnings: 120 },
    { month: 'Apr', earnings: 90 },
    { month: 'May', earnings: 150 },
    { month: 'Jun', earnings: 130 },
  ],
};

export const tasks = {
  originalPosts: [
    { id: 1, type: 'original', title: 'Create a post about sustainable living', subreddit: 'r/sustainability', payment: 15.00, description: 'Write a 300+ word post about your personal journey with sustainable living. Include tips for beginners.' },
    { id: 2, type: 'original', title: 'Share a review of a new tech gadget', subreddit: 'r/gadgets', payment: 20.00, description: 'Post a detailed review of a recently released tech gadget. Include pros, cons, and a personal rating.' },
    { id: 3, type: 'original', title: 'Start a discussion on remote work challenges', subreddit: 'r/remotework', payment: 12.50, description: 'Create a post asking the community about their biggest challenges with remote work and how they overcome them.' },
  ],
  copyPastePosts: [
    { id: 4, type: 'copy-paste', title: 'Post about our new app release', subreddit: 'r/apps', payment: 5.00, content: 'Check out our new app, [App Name]! It helps you organize your life seamlessly. Download now from the App Store.' },
    { id: 5, type: 'copy-paste', title: 'Share a discount code for our store', subreddit: 'r/deals', payment: 7.50, content: 'Limited time offer! Use code REDDIT25 for 25% off all items on our website. Link in bio!' },
  ],
  commenting: [
    { id: 6, type: 'comment', title: 'Comment on a post about financial planning', postUrl: 'https://www.reddit.com/r/personalfinance/comments/xxxxxx', payment: 3.00, comment: 'Great advice! Another tip is to automate your savings. It makes a huge difference in the long run.' },
    { id: 7, type: 'comment', title: 'Engage in a discussion about travel destinations', postUrl: 'https://www.reddit.com/r/travel/comments/yyyyyy', payment: 4.00, comment: 'I completely agree, Southeast Asia is incredible for backpackers. The food alone is worth the trip!' },
    { id: 8, type: 'comment', title: 'Influence opinion on a new movie', postUrl: 'https://www.reddit.com/r/movies/comments/zzzzzz', payment: 5.00, comment: 'I was pleasantly surprised by this movie. The cinematography was stunning, and the lead actor gave a powerful performance.' },
  ],
  acceptedTasks: [
    { id: 9, title: 'Write a comprehensive guide on home gardening', payment: 25.00, progress: 60, status: 'Writing post' },
    { id: 10, title: 'Find and comment on 5 relevant posts', payment: 10.00, progress: 80, status: 'Commenting' },
    { id: 11, title: 'Create a video review for a product', payment: 50.00, progress: 25, status: 'Scripting' },
  ],
  completedTasks: [
    { id: 12, title: 'Post about a new productivity app', completedDate: '2023-06-10', earned: 5.00 },
    { id: 13, title: 'Comment on a thread in r/technology', completedDate: '2023-06-09', earned: 2.50 },
    { id: 14, title: 'Write a review for a local restaurant', completedDate: '2023-06-08', earned: 10.00 },
    { id: 15, title: 'Create a post comparing two smartphones', completedDate: '2023-06-05', earned: 18.00 },
    { id: 16, title: 'Share a travel itinerary for a weekend trip', completedDate: '2023-06-02', earned: 12.00 },
  ],
};

export const referrals = {
  link: 'https://reddittasks.io/ref/alexdoe123',
  count: 3,
  earnings: 15.00,
  referredUsers: [
    { name: 'Jane Smith', date: '2023-05-12', avatarUrl: 'https://picsum.photos/seed/10/100/100' },
    { name: 'Sam Wilson', date: '2023-05-20', avatarUrl: 'https://picsum.photos/seed/11/100/100' },
    { name: 'Chris Evans', date: '2023-06-01', avatarUrl: 'https://picsum.photos/seed/12/100/100' },
  ]
};

export const accountStats = {
  tasksCompleted: 42,
  reputation: 'Excellent',
  memberSince: '2023-01-15'
}
