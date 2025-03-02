import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

// Sample review data
const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    image: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "February 15, 2024",
    content:
      "Dr. Chen provided exceptional guidance on implementing NLP in our product. Her expertise and clear explanations helped us overcome several technical challenges. Highly recommend!",
  },
  {
    id: 2,
    name: "Maria Garcia",
    image: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "February 3, 2024",
    content:
      "I had a session with Dr. Chen to discuss AI ethics considerations for our startup. She offered valuable insights and practical frameworks that we've since implemented. Looking forward to our next session!",
  },
  {
    id: 3,
    name: "David Kim",
    image: "/placeholder.svg?height=50&width=50",
    rating: 4,
    date: "January 27, 2024",
    content:
      "Great session on machine learning fundamentals. Dr. Chen explained complex concepts in a way that was easy to understand. She provided practical examples and resources for further learning. The only reason for 4 stars instead of 5 is that we ran out of time before covering all the topics I had questions about.",
  },
  {
    id: 4,
    name: "Jennifer Lee",
    image: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "January 18, 2024",
    content:
      "Dr. Chen helped me prepare for my AI research interview. Her insights into current research trends and interview strategies were invaluable. I got the position and am so grateful for her mentorship!",
  },
]

export default function ExpertReviews({ expertId }: { expertId: number }) {
  // In a real app, you would fetch reviews based on the expertId

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Client Reviews</h2>
        <div className="flex items-center">
          <Star className="h-5 w-5 fill-primary text-primary" />
          <span className="ml-1 font-medium">4.9</span>
          <span className="text-muted-foreground ml-1">(124 reviews)</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={review.image} alt={review.name} />
                  <AvatarFallback>
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-muted-foreground">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

