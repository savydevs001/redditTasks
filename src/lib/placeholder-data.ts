export type Task = {
  id: number;
  type: 'original' | 'copy-paste' | 'comment';
  title: string;
  subreddit?: string;
  payment: number;
  description?: string;
  content?: string;
  postUrl?: string;
  comment?: string;
};

export type AcceptedTask = Task & {
  progress: number;
  status: string;
};

export type CompletedTask = Task & {
  completedDate: string;
  earned: number;
};

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
    { id: 1, type: 'original' as const, title: 'Create a post about sustainable living', subreddit: 'r/sustainability', payment: 15.00, description: 'Write a 300+ word post about your personal journey with sustainable living. Include tips for beginners.' },
    { id: 2, type: 'original' as const, title: 'Share a review of a new tech gadget', subreddit: 'r/gadgets', payment: 20.00, description: 'Post a detailed review of a recently released tech gadget. Include pros, cons, and a personal rating.' },
    { id: 3, type: 'original' as const, title: 'Start a discussion on remote work challenges', subreddit: 'r/remotework', payment: 12.50, description: 'Create a post asking the community about their biggest challenges with remote work and how they overcome them.' },
  ],
  copyPastePosts: [
    { id: 4, type: 'copy-paste' as const, title: 'Post about our new app release', subreddit: 'r/apps', payment: 5.00, content: 'Check out our new app, [App Name]! It helps you organize your life seamlessly. Download now from the App Store.' },
    { id: 5, type: 'copy-paste' as const, title: 'Share a discount code for our store', subreddit: 'r/deals', payment: 7.50, content: 'Limited time offer! Use code REDDIT25 for 25% off all items on our website. Link in bio!' },
  ],
  commenting: [
    { id: 6, type: 'comment' as const, title: 'Comment on a post about financial planning', postUrl: 'https://www.reddit.com/r/personalfinance/comments/xxxxxx', payment: 3.00, comment: 'Great advice! Another tip is to automate your savings. It makes a huge difference in the long run.' },
    { id: 7, type: 'comment' as const, title: 'Engage in a discussion about travel destinations', postUrl: 'https://www.reddit.com/r/travel/comments/yyyyyy', payment: 4.00, comment: 'I completely agree, Southeast Asia is incredible for backpackers. The food alone is worth the trip!' },
    { id: 8, type: 'comment' as const, title: 'Influence opinion on a new movie', postUrl: 'https://www.reddit.com/r/movies/comments/zzzzzz', payment: 5.00, comment: 'I was pleasantly surprised by this movie. The cinematography was stunning, and the lead actor gave a powerful performance.' },
  ],
  acceptedTasks: [
    { id: 9, type: 'original' as const, title: 'Write a comprehensive guide on home gardening', subreddit: 'r/gardening', payment: 25.00, description: 'Create a 500+ word guide on starting a home garden. Cover topics like soil, sunlight, and beginner-friendly plants.', progress: 60, status: 'Writing post' },
    { id: 10, type: 'comment' as const, title: 'Find and comment on 5 relevant posts', payment: 10.00, postUrl: 'https://www.reddit.com/r/technology/comments/zzzzzz', comment: 'This is a great point. I would also add that the new advancements in AI will likely accelerate this trend even further.', progress: 80, status: 'Commenting' },
    { id: 11, type: 'copy-paste' as const, title: 'Post about our summer sale', subreddit: 'r/fashiondeals', payment: 8.00, content: 'Massive summer sale is on! Get up to 50% off on all items. Visit our website now!', progress: 25, status: 'Pending post' },
  ],
  completedTasks: [
    { id: 12, type: 'copy-paste' as const, title: 'Post about a new productivity app', completedDate: '2023-06-10', earned: 5.00, payment: 5.00, subreddit: 'r/productivity', content: 'This new app is a game-changer for my workflow!' },
    { id: 13, type: 'comment' as const, title: 'Comment on a thread in r/technology', completedDate: '2023-06-09', earned: 2.50, payment: 2.50, postUrl: 'https://www.reddit.com/r/technology/comments/xxxxxx', comment: 'Really insightful comment here.' },
    { id: 14, type: 'original' as const, title: 'Write a review for a local restaurant', completedDate: '2023-06-08', earned: 10.00, payment: 10.00, subreddit: 'r/localfood', description: 'This place has the best pizza in town.' },
    { id: 15, type: 'original' as const, title: 'Create a post comparing two smartphones', completedDate: '2023-06-05', earned: 18.00, payment: 18.00, subreddit: 'r/smartphones', description: 'A detailed comparison between the latest models.' },
    { id: 16, type: 'copy-paste' as const, title: 'Share a travel itinerary for a weekend trip', completedDate: '2023-06-02', earned: 12.00, payment: 12.00, subreddit: 'r/travelhacks', content: 'Here is my itinerary for a weekend in the mountains.' },
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
