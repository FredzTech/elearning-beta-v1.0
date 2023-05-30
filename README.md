# elearning-beta-1.0

### DISCOVERIES.

- In react-pdf the worker seems to be the issue.
- Do not trust all the garbage you pick from gpt. Making such dum errors.
- For array , its better to check for length instead of null.
- Objects also have their funny way of checking if they are null
- Here is how to implement [skeletons](https://dev.to/jobpick/how-to-create-a-skeleton-loader-in-tailwindcss-38gh)
- React query will also go a long way with quering and caching data.
- React hooks are asynchronous in nature. No wonder the weird null after console.logging but on second tutor accordion item click it works. We get old data which is equivalent to new data which hasn't changed hence the correct console.logging but when we click away to another items, the old data is exposed. **_Using useEffect hook and avoiding unecessary hooks will solve this problem well._**

### WEEK OBJECTIVES (MAY 22-03-23 )

- Streamline react-pdf to handle pdf preview on a modal.:heavy_check_mark:
- Streamline react-dropzone to smoothen file upload.
- Streamline form validation to ensure there is an actual file data and of the correct type b4 uploading shit to db.
- Streamline quill editor to manipulate & display content appropriately.
- Building the resources section to handle pdf & additional audio documents.
- Look for sustainable audio renderer.

### PERFOMANCE OPTIMIZATION

- Caching to avoid unecessary rerenders or data fetches especially when my data is not changing.
- Improving the audio player to be responsive to the controls.
- Improving navigation to show dynamic changes upon a refresh.:heavy_check_mark:

### WHAT WE NEED TO GET GOOD AT AS WE CONTINUE WITH THIS JOURNEY

- Condition styling : Conditional application of classes using the ternary operator. :heavy_check_mark:
- Units outline page should be rendered then await content ... Better UX .... Other pages should also follow this format.

### DISCOVERIES

#### Solving the 404 error reload

- Simply set up the \_redirects file inside the public folder and add the following line : `/*    /index.html  200`

# elearning-module-beta-v1.0

# elearning-beta-v1.0
