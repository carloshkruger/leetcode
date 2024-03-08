class Twitter {
  private userFeeds = {}
  private follows = {}
  private count = 0

  postTweet(userId: number, tweetId: number): void {
    if (!this.userFeeds[userId]) {
      this.userFeeds[userId] = []
    }
    this.userFeeds[userId].push([tweetId, this.count++])
  }

  getNewsFeed(userId: number): number[] {
    const allUsers = this.follows[userId] ?? new Set()
    allUsers.add(userId)
    const feed = []
    for (const user of allUsers.values()) {
      const tweets = (this.userFeeds[user] ?? [])
      tweets.sort((a, b) => b[1] - a[1])
      feed.push(...tweets.slice(0, 10))
    }
    feed.sort((a, b) => b[1] - a[1])
    return feed.splice(0, 10).map(item => item[0])
  }

  follow(followerId: number, followeeId: number): void {
    if (!this.follows[followerId]) {
      this.follows[followerId] = new Set()
    }
    this.follows[followerId].add(followeeId)
  }

  unfollow(followerId: number, followeeId: number): void {
    if (!this.follows[followerId]) {
      return
    }
    this.follows[followerId].delete(followeeId)
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */