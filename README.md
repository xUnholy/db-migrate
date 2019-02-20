# DB Migration

This tool was made to simplify migrating from MongoDB to GCP Firestore. Both are NoSQL document based databases however there is no clear way to import an entire collection into Firestore as it's currently in Beta.

## Getting Started

------

### Prerequisites

You should have the following to be able to use this this tool:

1. Firestore Service Account Credentials exported to JSON
2. A collection Exported via MongoDB in JSON format

Both of these must be relative to the index.js file with in this repository.

### Running

To be able to begin the migration of your MongoDB exported collection into GCP Firestore, run the following:

```bash
npm start
```
