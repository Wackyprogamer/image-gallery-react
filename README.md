This Project was created with npm create-react-app -- This project is a image gallery made with react from the unsplash API -- As
you noticed I did not include my key on here as per Unsplashes guidelines -- to remedy this download files and create an account on
Unsplash to grab your own API Key.

Then create an .env file with your access key -- Should be like this -- REACT_APP_ACCESS_KEY= then whatever your key is

Once it works you should be able to choose a category and unsplash api will load 10 images of that category


--- Heres a vercel Link for it -- https://image-gallery-react-phi.vercel.app/

_________________________________________________________________
Everything Below is the usual NPM Create-react-Project Stuff --
_________________________________________________________________
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





-----------------------------------------------------------


# Docker Commands

# Docker Build -- 
# docker build -t image-gallery-react .

# Docker Run Command -- 
# docker run -p 3000:3000 -d image-gallery-react

# To view website Run -- http:localhost://3000



--------------------------------------------------------------

# Docker Stack Commands

# Create docker-compose-yaml file

# create layout like so 

# version: "3.8"

# services:
  # myImageGallery:
  #  image: image-gallery-react:latest
  #  ports:
  #    - "3000:3000"
  #  deploy:
  #    replicas: 3

  # myImageGallery2:
  #  image: image-gallery-react:latest
  #  ports:
  #    - "3001:3000"

  #  deploy:
  #    replicas: 2



  # Run docker stack deploy -c docker-compose.yaml myImageGallery

  # to list the stacks that are running -- docker stack ls

  # list the history / state of the stack -- docker stack ps myImageGallery

  # list the services that are running in the stack -- docker stack services myImageGallery

  # to list running containers -- docker ps

  # stop running container -- docker stop <container_id> #Grab this from docker ps

  # to remove the stack (by Name) -- all the containers will be stopped and removed -- docker stack rm myImageGallery

# docker stack services myImageGallery to list services

  # scaling out -- docker service scale myImageGallery_myImageGallery=6