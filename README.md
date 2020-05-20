# AngularApp

Setup an angular project and Prime NG
  1. Update the node version to v12.0.0
  2. npm install -g @angular/cli
  3. ng new <name>
  4. Create a Repo in Git
  5. Navigate into the workspace here AngularApp/AngularApp

Next setup storybook for the angular project:
  1. npx -p @storybook/cli sb init --type angular

Next setup chromatic to the project:
  1. Login with github credentials
  2. Choose the angular project from Git repo
  3. Now install chromatic using npm install --save --dev chromatic
  4. Next publish to Chromatic's secure CDN for the first time using the generated project token npx chromatic --project-          token=$$$$$$$$$$$
  5. Now the setup is completed
  
  Next Add stories in the storybook:
  
  1. Navigate to ../src/stories/<storyname>.stories.ts
  2. Add some UI components in the file
  3. To build the storybook run npm run storybook. This will launch the storybook in an isolated environment as localhost:6006
  4. To build the storybook as a static webapp run npm build-storybook. In package.json file for get the build files use            build-storybook: "build-storybook -c .storybook -o .out"
  5. To verify the UI changes and see it in dashboard --> npm run chromatic
  
  
  NOTE: IN THIS PROJECT THERE WILL BE SOME BASIC STORIES, IF WE WANT TO HAVE IT AS SEPERATE COMPONENTS AND INCLUDE IN THE STORY BOOK DO THE FOLLOWING:
  1. npm run ng generate component <COMPONENTNAME>  -- --skip-import
  2. THEN WRITE SOME CSS TO THE COMPONENT, EDIT THE HTML
  3. NOW INCLUDE THIS COMPONENT IN THE STORY USING BELOW FORMAT IN THE STORY FILE
      -> import { COMPONENTNAME } from '<PATH>';
      -> export const <NAME> = () => ({
          component: <COMPONENTNAME>,
            props: {}
        });
  4. IN .STORYBOOK FOLDER ADD BELOW FILES;
    1. ADD CONFIG.JS FILE TO LOAD THE CSS FILE
      import { configure } from '@storybook/angular';
      import '!style-loader!css-loader!./main.css';
      // automatically import all files ending in *.stories.ts
      configure(require.context('../src/stories', true, /\.stories\.ts$/), module);
    2. ADD MAIN.CSS FILE TO IMPORT PRIMENG ICONS AND CSS
       @import "../node_modules/primeicons/primeicons.css";
       @import "../node_modules/primeng/resources/primeng.min.css";

        

