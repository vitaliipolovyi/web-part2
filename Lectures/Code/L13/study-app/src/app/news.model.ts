import { NewsSource } from "./news-source.model"

export class News {
  source: NewsSource
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}
