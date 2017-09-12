## Committed

Manage your weekly goals and todos a beautiful minimalist Chrome NewTab extension.
![Alt text](/demo1.png?raw=true "Minimalist design")

## Features
* Keep track of the time, your todos and goals in a clean interface
* Create a goal by setting a todo on repeat
* Drag-and-drop to organize your list
* Edit your todo/goal by clicking on it
* Free and ads-free

## Play with the code yourself
1. `git clone https://github.com/donfour/Committed.git`
2. Edit the code however you want
3. Type `npm run build` into your console
4. Go into the build folder, change the content of manifest.json to the following (Chrome needs this file to load the extension):
`
{
  "name": "Committed - NewTab Goals and Todos Manager",
  "short_name": "Committed",
  "description": "Manage your weekly goals and todos in your newtab",
  "version": "1.0.0",
  "manifest_version": 2,
   "chrome_url_overrides" : {
     "newtab": "index.html"
   },
   "icons": {
    "128": "icon128.png"
  }
}
`
5. Zip the build folder
6. Open the extension page by entering chrome://extensions/ into your Chrome browser's url
7. Check the "Developer Mode" box on the top
8. Click "Load unpacked extension..."
9. Select and upload `build.zip`
10. Open NewTab and enjoy!

## Libraries used
* Frontend: React
* Drag-and-drop functionality: react-beautiful-dnd
