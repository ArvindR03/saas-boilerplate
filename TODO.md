# SETUP

Setup your Next.js app with:

- React.js
- Tailwind CSS
- shadcn-ui
- Clerk
- MongoDB
- Mongoose

## STEPS

1. Configure Clerk
   1. Add all the environment variables to .env.local
2. Configure MongoDB
   1. Create a MongoDB Atlas Cluster
   2. Add the URI to .env.local (and make sure to add the DB name after the /)
   3. Add your models under /lib/db/models
   4. Configure the API as appropriate under /api/db
   5. Use fetch to call the API as appropriate, look into the root page for an example (remember this requires SSR)
