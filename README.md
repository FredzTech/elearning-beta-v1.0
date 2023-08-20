# ELIMU HUB

- All I need is practise to hammer the concepts in!

# WHAT WE SOLVE

- Make sure that the lesson video blurs out on lesson change and that the notes refetch every time the ID changes.... Avoiding a refetch might see to it that this is done.
- Look for alternative tooltip alternatives.
- Learning react hook form is not a priority right now....
- Where we help learners carry out their revision for the units that they are taking in school.
- Exams are generally repeated questions over and over again over the course of time.Having this exam materials , class notes and additonal youtube videos (Youtube is the new university) gathered under one roof will help learners practise targeted revision and pass their exams with flying colours.
- In this application , I pull all resources necessary to help learner succeed in their studies right from the course outline.
- Having the course outline before playing any lesson is a really good reminder to learner to set his / her goals right.
- If we really deliver value , logging in to track progress will be a non issue with the users. However in my application , i do not need the user to log in , i only need to know in which school they are in and which course they are taking so that i can administer targeted resources for them.
- This is my niche.... Helping learners revise for their exams with ease and in a targeted manner and later at a low price.
- I need a navbar for dashboards asap!

### DOES THIS PRODUCT HAVE THE ABILITY TO BE MONETIZED ?

- Yes , we place all resources needed to pass exams with updated materials all under one roof! Infact , we do not need to be content creators, we can just share what is out there , what is in youtube since it is our red university.
- Lecturers can get to recommend for their learners the best resources to use for their revision, including posting lesson notes and relevant materials for their learners to use.**_This is how we bring the lecturers on board._**
- With the ability to monetize this product , the source code will not be let out in the public domain. However , the product will be free to use for all learners for now as we polish up on our marketing skills.
- Using already pre-existing youtube videos , referencing authors correctly and only paying for space to store images and videos will really make the cost super low and sustainable

  ### PRODUCT REDEFINATION

  - The tutor will officially be renamed as the lecturer.
  - There will be need to add an account for student content creators.

### POST RELEASE OPTIMIZATIONS

##### CHUNK 1

- Implement tanstack table to handle sorting , filtering and pagination table logic.
- A must experiment on use of the tanstack table functionalities to update the card.. I mean how will it know coz its only the elements that are changing really....
- Make navbar a dropdown in small screen similar to church app.
- Delete function is executing twice... Find out why.

##### CHUNK 2

- Make unit outline and unit breakdown descriptive
- Correct back btn... Screen freezes when it reaches to the homepage
- Look into how we can use spread operator with the alertbox to avoid having to pass in default props again if they do not change.
- Create resources interface and test upload to S3 Bucket
- Add the menu button to user page for free navigateion.Persist the side bar on large screens for swift navigation.
- Invalidate users upon a new registration via the user form

##### CHUNK 3

- Implement typescript with SWC [Weekend Project]
- Keep track of user interaction and completion using document ids , arrays and array methods.(Backend need!)[To be done after migration to typescript]
- Tweak login to use email to login.
- Consider verify email account while logging in to ensure true data....
- Find out means of resetting token.
- Consider anonymous authentication for students. But for tutors and admins , their records must be straight.... They must authenticate.

#### PRODUCT OPTIMIZATION

- Lesson , Chapter number are not being read correctly... Something weird happends to them upon update
- For the lesson number . split using the splice operator to have the number at the end only
- There is a back button loop that is affecting the back btn...
- Find a way of appending back the lesson type that was there after token verification.
- Find a better way of not going to s3 uploader without lesson or resource name.

### KEY TIPS I HAVE PICKED UP ALONG THE JOURNEY

- I was able to update the chapter 4 accross rerenders. It appears react router dom manages its states.
- Page not found is quite strong when a person navigates to a form directly with a background....Look for better words... But it works well!

- Multiple use states leads to multiple rerenders...Each state update triggers a new render cycle, and React will batch multiple state updates into a single render cycle only if they occur synchronously within the same event handler. Minimize their usage.

- No 1 golden principal , no need to import a component from a component library if :-

  - It is easy to implement
  - I will end up redoing the styling.

- Must try luxon when i want to process actual dates data.
- Component libraries will be a huge time saver for building complex components eg the dropdowns and the tables and calendar functionality. shadcn/ui comes in nicely.
- Working with smaller files grouped by functionalities makes development simpler!
- self-end class name gives a flex-item positioning independence.
- Using overflow-x-hidden hidden helps to hide the unwanted x direction scrollbar when overflow-y-auto is used.
- Router state has always been simply an object... You know that basic container with a key and a value which in my case was as simple as assigning a background `{ background: location }` and once present in the state activating the second set of routes.
- When an error occurs , the error code should be that of the error message... Not 400... Remember that axios is only successfull when a 2xx response is returned.... The rest automatically results into an error.

- **_react hooks are asynchronous nature. Use them sparingly. They can take time to update no wonder the null console.log on useState_**
- To refresh dynamic routes , set up the \_redirects file inside the public folder and add the following line : `/*    /index.html  200`. It works like magic.
- Let the browser do the scrolling for a whole page if you only need a section that might be a different story.
- Horizontal scroll issue might be as a result of 2 scrolls
- A grid is responsive by nature. Do not bother constraining its children's width...
- Anything that is not in the useEffect runs twice due to react strict mode.Hence the double console.logs() and this is normal.
- Fetching an element in an arrya using `(roles?.includes("EM-203") || roles?.includes("EM-202")` instead of `(roles[0] === "EM-203" || roles[0] === "EM-202"` is bettter
- Never do javascript comparisons like this `(roles?.includes("EM-202" || "EM-203")) ` . Javascript excludes the second part hence causing an error interms of expected behaviour.
- How to check if an object is empty`Object.keys(obj).length === 0`
- For arrays,check for length instead of checking if null.
- The handle logout is called because i pass the function instead of the refence. Therefore , ` onClick={() => {handleLogout()}}` should be replaced by ` onClick={handleLogout}`

### EXTENDING APP FUNCTIONALITY BY MAKING USE OF AVAILABLE TECHNOLOGIES

- There is no need of reinventing the wheel for technologies that are out there.
- For comments and questions they will be send via email and a discord channel set up to handle / grow the community.
- Email is the best and the cheapest mode of communication that i can use extensively for password reset , verification of credentials , user login , frequent updates and communication.
- SMS can be used for crucial services eg rapid payment responses.

### SENDING AND INTEPRETING STATUS AND ANY DATA FROM BACKEND

- Remember there are only two major sides to requests and responses..... For requests , our crucial information is in the `req.body` whereas for responses , our crucial information is in the `res.data`

- What we send to the frontend will be found inside the response object under the data eg if we send ` res.status(201).json({ signedUrl, Key });` We shall destructure this props from the response.data as `const { signedUrl, Key } = response.data`
- Usually i enjoy breaking out the data and status (if needed) from the response object as
  `const { data,status } = await axios.post("/file/", formData, config);`

### REFERENCES

1. How to implement [skeletons](https://dev.to/jobpick/how-to-create-a-skeleton-loader-in-tailwindcss-38gh)

2. How [chartJS](https://react-chartjs-2.js.org/) works in a flush!
