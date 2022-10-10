# To-do-list- by Brighton Chege

# step 1   install apllication and all dependencies
 1.first you need to create an react app with the following command 
        ```
        "yarn create react-app <name you want>
        ```
 if you do not have yarn you can sipmly install it by running 
       ```
         sudo npm install -g yarn
       ```

# step 2    create components

 we need to consider all the html coponents we might need to create our todolist.
 You can simply create the components by writing a simple function just as follows and do not worry about the functions in between them we will get to them later on
 ```
  < function Todolistadding() {
    return (
<div className="App">
  <div class="project-container">
    <div class="sub-container">
      <h1 class="project-heading" > To do list    </h1>
       <header class="project-header">
          <input type="text" class="project-input" placeholder=' Type and Add anything'
             value={name}
               onChange={(e) => setName(e.target.value)}
      />
           <button 
           onClick={handleSubmit} id="add-button"
            class="add-button"
             type="submit"
             ><h3>
                {Editing ? 'edit' : 'add'}</h3></button>
         </header>
         <header class="middlepart"> 
          {list.length > 0 && (
           <div className='outputcontainer'>
          <List items={list} removeItem={removeItem} editItem={editItem} /> </div>) }
          </header>
         <header class="endpart">
          <button class="clearall"  onClick={clearList} ><h3> Clear all</h3></button>
           </header>
         </div>
       </div> 
    </div>
    );
 ```
what you see above will give the html structure you can change it if it is not to your liking
# step 3  create fake/artificial server 
   
   Here we need to setup an artificial server note that this is not your regulat json server but it 
   will also do what we need to do .

   The code to do this  is below 
   ```
     const localstore = () => {
    let list = localStorage.getItem('list');
    if (list) {
      return (list = JSON.parse(localStorage.getItem('list')));
    } else {
      return [];
    }
  };
   ```
   note you do not have to use the same names as me to declare your variables 
# step 4 declare variables needed 

We need to create variables that we will ues to access the data that is put into the app
you can declare the variables with any names you want but they should all be iside the main function 
that contols evertying.
  
My variables were declared as follows and note in order  to use the USestate you need to import them 
```
        const [name, setName] = useState('');
  **const [list, setList] = useState(localstore());
        const [Editing, setEditing] = useState(false);
       const [editID, setEditID] = useState(null);
```
if you looked at my code at the 2 variable declaration carefully you will realise i used the server we created above  which was inside the function "localstore"

# step 5 create the various functions 
we need to consider what the user can and cannot do. IN cosideration of this we need a function that enables the user to ```
                  1, add the activity he wants 
                  2, eddit the activty added 
                  3, delete the added activity
                  4,delete all activities
                    ```
  #  add function 
   the function need to acces the data in the input field and display it into the various elements we created.
    
    In the above step we declared the variables we need so we need to use them here 
    ```
       const handleSubmit = (e) => {
      e.preventDefault();
      if (!name) {
     } else if (name && Editing) {
        setList(
          list.map((item) => {
            if (item.id === editID) {
              return { ...item, title: name };
            }
            return item;
          })
        );
        setName('');
        setEditID(null);
        setEditing(false);
      } else {
        const newItem = { id: new Date().getTime().toString(), title: name };
        setList([...list, newItem]);
        setName('');
      }
    };
    ```
    in the above code handlesubmit is the function that add items. Now have the function that excutes the add fuction , next you need to attach it to the buttons tyou created.
    note here the added item is represented by name

  #  edit function 
    this function need to access the created item make adjustments and then post the ne data.
    Here we will make use of the edit variable above 
    ```
    const editItem = (id) => {
      const itemselected = list.find((item) => item.id === id);
      setEditing(true);
      setEditID(id);
      setName(itemselected.title);
    };
    ```
 #  delete and remove  functions
   These function are ruther easy so i am just going to display the code for you as they can be easily
   be understood
   ```
   const clearList = () => {
      setList([]);
    };
    const removeItem = (id) => {
      setList(list.filter((item) => item.id !== id));
    };

   ```
   do not forget to attach the fuction to buttons which have eventlisteners
  
# start project
  Now you have already coverd the vital parts of the app 
  Note use useeffect to save the changes made to the server 
  ```
   useEffect(() => {
      localStorage.setItem('list', JSON.stringify(list));
    }, [list]);
    use the same terms as used when crarting the server 
  ```
for more clarity you can check my source code 

