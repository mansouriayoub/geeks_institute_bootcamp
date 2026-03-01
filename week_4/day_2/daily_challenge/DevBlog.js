use DevBlog

// Step 1: The Authors (Users Collection)
db.users.insertMany([
    {
        username: "noha_dev",
        bio: "Full-stack developer passionate about AI.",
        socialLinks: {
            github: "https://github.com/noha-dev",
            linkedin: "https://linkedin.com/in/noha-dev",
            twitter: "https://twitter.com/noha_dev"
        }
    },
    {
        username: "omar_codes",
        bio: "Backend engineer and database enthusiast.",
        socialLinks: {
            github: "https://github.com/omar-codes",
            linkedin: "https://linkedin.com/in/omar-codes"
        }
    },
    {
        username: "lina_design",
        bio: "UI/UX designer who loves clean interfaces.",
        socialLinks: {
            dribbble: "https://dribbble.com/lina-design",
            instagram: "https://instagram.com/lina.design"
        }
    }
])

db["users"].find()
/*{
    _id: ObjectId('69a423b6e32cf096b8ce6c03'),
    username: 'noha_dev',
    bio: 'Full-stack developer passionate about AI.',
    socialLinks: {
      github: 'https://github.com/noha-dev',
      linkedin: 'https://linkedin.com/in/noha-dev',
      twitter: 'https://twitter.com/noha_dev'
    }
  }
{
    _id: ObjectId('69a423b6e32cf096b8ce6c04'),
    username: 'omar_codes',
    bio: 'Backend engineer and database enthusiast.',
    socialLinks: {
      github: 'https://github.com/omar-codes',
      linkedin: 'https://linkedin.com/in/omar-codes'
    }
  }
  {
    _id: ObjectId('69a423b6e32cf096b8ce6c05'),
    username: 'lina_design',
    bio: 'UI/UX designer who loves clean interfaces.',
    socialLinks: {
      dribbble: 'https://dribbble.com/lina-design',
      instagram: 'https://instagram.com/lina.design'
    }
  }*/



// Step 2: The Content (Posts Collection)
db.posts.insertMany([
    {
        title: "Getting Started with MongoDB",
        body: "MongoDB is a NoSQL database designed for scalability and flexibility...",
        tags: ["mongodb", "database", "backend"],
        authorId: ObjectId("69a423b6e32cf096b8ce6c03")
    },
    {
        title: "Why Developers Love NoSQL",
        body: "NoSQL databases allow flexible schemas and horizontal scaling...",
        tags: ["nosql", "scaling", "databases"],
        authorId: ObjectId("69a423b6e32cf096b8ce6c03")
    }
])

db.posts.find()
/*
{
  _id: ObjectId('69a424a2e32cf096b8ce6c06'),
  title: 'Getting Started with MongoDB',
  body: 'MongoDB is a NoSQL database designed for scalability and flexibility...',
  tags: [
    'mongodb',
    'database',
    'backend'
  ],
  authorId: ObjectId('69a423b6e32cf096b8ce6c03')
}
{
  _id: ObjectId('69a424a2e32cf096b8ce6c07'),
  title: 'Why Developers Love NoSQL',
  body: 'NoSQL databases allow flexible schemas and horizontal scaling...',
  tags: [
    'nosql',
    'scaling',
    'databases'
  ],
  authorId: ObjectId('69a423b6e32cf096b8ce6c03')
}
*/



// Step 3: The Interaction (Comments Embedded)
db.posts.updateOne(
    { title: "Getting Started with MongoDB" },
    {
        $push: {
            comments: {
                username: "lina_design",
                text: "Very useful article!",
                timestamp: new Date()
            }
        }
    }
)

db.posts.find({}, { title: 1, comments: 1 })
/*{
    _id: ObjectId('69a424a2e32cf096b8ce6c06'),
    title: 'Getting Started with MongoDB',
    comments: [
      {
        username: 'lina_design',
        text: 'Very useful article!',
        timestamp: 2026-03-01T11:44:13.431Z
      }
    ]
  }
  {
    _id: ObjectId('69a424a2e32cf096b8ce6c07'),
    title: 'Why Developers Love NoSQL'
  }*/
