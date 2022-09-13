# TODO 1.2: Code Cleanup and Folder Structure

1.  Go to the _index.html_ file and change the title from ‘React App’ to ‘Movie Booking App’.
2.  Inside the _src_ folder, delete the _App.js, App.css_ and _logo.svg_ files and in the _index.js_ file, delete the _App_ tag, leaving empty divs in the _render()_ method.
3.  Inside the _src_ folder, create a new folder named ‘assets’. This folder will consist of all the resources that are to be used in the application.
4.  Inside the _src_ folder, create a new folder named ‘common’. This folder will consist of all the common files (components, stylesheets, scripts, etc.) that are needed for the application.
5.  Inside the _src_ folder, create a new folder named ‘screens’. This folder will consist of all the components corresponding to different screens (or pages) in the application.
6.  You need to make sure to adhere to these guidelines for folder structure whenever you make any change:

    - Always keep these folders and the corresponding files inside the root directory of your application:

      - 'node_modules’ folder (containing the list of all the packages)
      - 'public’ folder

        - ‘index.html’ file
        - ‘manifest.json’ file

      - ‘src’ folder

        - ‘assets’ folder
        - ‘common’ folder
        - ‘screens’ folder
        - ‘index.css’ file
        - ‘index.js’ file

      - ‘.gitignore’ file
      - ‘package-lock.json’ file
      - ‘package.json’ file
      - ‘README.md’ file

    - Remember to not disturb the names of these folders and files and their locations inside the application. If you do, then it would be cumbersome for the graders to evaluate your code based on the given rubrics. Also, take special care to change only the required content of these folders and files. If you fail to do so, then your application may fail to run successfully, and this would also lead to your application being evaluated incorrectly.
    - Place all the common elements, components, stylesheets, scripts, etc. inside the ‘common’ folder.
    - Place all the resource files that you need to use in the application inside the ‘assets’ folder.
    - Create all your pages (called screens) inside the ‘screens’ folder. For each page, you need to first create a folder by the name of that page. Inside this folder, you need to create one JavaScript file and one stylesheet corresponding to that page.

      - For example, if you are creating the home page, then you can create a folder named ‘home’ inside the ‘screens’ folder. Inside this folder, you can create two files, ‘Home.js’ and ‘Home.css’, which are, respectively, the JavaScript and stylesheet files corresponding to the home page of the application:

        - ‘screens’ folder

          - ‘home’ folder

            - ‘Home.js’ file
            - 'Home.css’ file