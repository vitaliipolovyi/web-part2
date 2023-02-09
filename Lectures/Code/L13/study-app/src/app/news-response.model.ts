import { News } from "./news.model"

export class NewsResponse {
  articles: News[]
  status: string
  totalResults: number
}
