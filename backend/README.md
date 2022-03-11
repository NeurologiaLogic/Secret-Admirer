# backend

you only need to setting the nodeJs libray in "app.js"
and routing in "routes folder"
other than that only setting the "www.js" to setting the SSL

Haven't added csurfprotection to defend CSRF

## added:

- database
- session
- json body parser
- firebase function for serverless

## What To Edit

1.  **bin** = where the server starts (do not touch unless want to add SSL cert)
2.  **functions** = Settings for Firebase Functions
3.  **models** = MonggoDb Schema Model
4.  **test** = for testing with jest (haven't tried)
5.  **public** = unused
