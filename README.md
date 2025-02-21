# Next.js 15 App Router API Route 404 Error

This repository demonstrates a bug in Next.js 15's App Router where API routes unexpectedly return a 404 error.  The issue is related to the configuration and setup of API routes within the new App Router structure.

## Bug Description

When attempting to access the API route `/api/hello`, the server returns a 404 Not Found error, rather than the expected JSON data. The `pages/api/hello.js` file is correctly structured, but it's not properly recognized by the App Router.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Access the API route via `http://localhost:3000/api/hello` (you should get a 404). 

## Solution

The provided solution shows how to correctly configure the API route to work within the App Router context of Next.js 15.  This may involve adjustments to the file structure or configuration to ensure proper routing.