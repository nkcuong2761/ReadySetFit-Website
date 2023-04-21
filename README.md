## How to run RSF Website on localhost
#### 1. Navigate to the rsf-web directory and install all package
`yarn install`
#### 2. If on Mac, close all Chrome activity. Then run this in the terminal
`open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials`

This starts Chrome in a no-security mode. The goal is to bypass the CORS policy from the RSF API.

If you are on a Window computer, google it up:)
#### 3. Start the web app on localhost
`yarn start`
