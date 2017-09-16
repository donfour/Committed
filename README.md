## Committed

Manage your weekly goals and todos in a minimalist Chrome NewTab extension.
![Alt text](/demo1.png?raw=true "Minimalist design")

## Features
* Keep track of the time, your todos and goals in a clean interface
* Create a goal by setting a todo on repeat
* Drag-and-drop to organize your list
* Edit your todo/goal by clicking on the text
* Free and ads-free

## Play with the code yourself
1. `git clone https://github.com/donfour/Committed.git`
2. `npm install`, `npm start`, and see the app running on localhost:3000. Edit the code however you want
3. To actually have it running as a chrome extension, first type `npm run build` into your console
4. Go into the build folder, change the content of manifest.json to the following (chrome needs this file to load the extension):
`
{
  "name": "Committed - NewTab Goals and Todos Manager",
  "short_name": "Committed",
  "description": "Manage your weekly goals and todos in your newtab",
  "version": "1.0.0",
  "manifest_version": 2,
   "chrome_url_overrides" : {
     "newtab": "index.html"
   }
}
`
5. Open the extension page by entering chrome://extensions/ into your Chrome browser's url
6. Check the "Developer Mode" box on the top
7. Click "Load unpacked extension..."
8. Select and load your build folder
9. Open NewTab and enjoy!

## Libraries used
* Frontend: React
* The collapsable menu in each todo: react-collapse
* Drag-and-drop functionality: react-beautiful-dnd
