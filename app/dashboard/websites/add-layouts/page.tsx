export default function Page() { 
    return (
      <h4>This is the layouts creation page</h4>
    );
}

// TODO: This worked. Thank you! Btw, I create a page called websites/add-layouts. 
// Basically, what want to happen for a user to add whatever layouts he wants to 
// add and simply copy and paste a set of elements for a section, and automatically 
// converts it to a format that would be compatible to the Section interface. 
// Perhaps a json format, or whatever is ideal. then this would be saved in the db. 
// I've already the setup the environment and plan to use the "@vercel/postgres" 
// package and I want. The function to save this section should be at "@/lib/actions".