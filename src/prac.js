// const App = () => {
//   const [name,setName] = useState("Sahil");
//   // function newName(){
//   //   setName("Shakti");
//   // }
//   return (
//       <View>
//         <Text style={{fontSize:30}}>Component</Text>
//         <Text style={{fontSize:30}}>{name}</Text>
//         {/* <Button onPress={newName} title="Click here"  /> */}
//         <Button title="Update" onPress={() => setName("Shakti")} />
//         <User name={name} age={21}/>
//       </View>
//   );
// };
// const User=(props) =>{
//   return (
//     <View style={{backgroundColor:'black',padding:5}}>
//       <Text style={{fontSize:30,color:'white'}}>Name : {props.name} </Text>
//         <Text style={{fontSize:30,color:'white'}}>Age : {props.age} </Text>
//     </View>
//   );
// }

// const App = () => {
//   const [name,setName] = useState("Sahil");
//   return (
//       <View>
//         <Text>Component</Text>
//         <Text style={styles.textBox}> Your name is : {name}</Text>
//         <TextInput
//         style={styles.textBox}
//         placeholder='Enter your name'
//         value={name}
//         onChangeText={(text) => setName(text)} />
//         <Button title="Clear Input Value" onPress={()=> setName("")}/>
//       </View>
//   );
// };

// const App = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [age, setAge] = useState("");
//   const [display, setDisplay] = useState(false);
//   const resetData = () => {
//     setName("");
//     setPassword("");
//     setAge("");
//     setDisplay(false);
//   };
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}> Enter your data </Text>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter your password"
//         value={password}
//         secureTextEntry={true}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter your age"
//         value={age}
//         onChangeText={(text) => setAge(text)}
//       />
//       <View style={{ marginBottom: 10 }}>
//         <Button title="Print" onPress={() => setDisplay(true)} />
//       </View>
//       <Button title="Clear" onPress={resetData} />
//       <View>
//         {display ? (
//           <View>
//             <Text style={{ fontSize: 30 }}>User name : {name}</Text>
//             <Text style={{ fontSize: 30 }}>Password : {password}</Text>
//             <Text style={{ fontSize: 30 }}>User age : {age}</Text>
//           </View>
//         ) : null}
//       </View>
//     </View>
//   );
// };

// const App = () => {
//   const users = [
//     { id: 1, name: "Sahil" },
//     { id: 2, name: "Shakti" },
//     { id: 3, name: "Ananya" },
//     { id: 4, name: "Sunshine" }
//   ];
//   return (
//     <View>
//       <Text style={{ fontSize: 40 }}>Here we go again</Text>
//       <FlatList
//         data={users}
//         renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const App = () => {
//   const users=[
//     {id:1,name:"Sahil"},
//     {id:2,name:"Shakti"},
//     {id:3,name:"Amit"},
//     {id:4,name:"Pratham"},
//     {id:5,name:"Kashish"},
//     {id:6,name:"Ananya"},
//     {id:7,name:"Abhi"},
//     {id:8,name:"Nonu"}
//   ]
//   return (
//     <View style={{flex:1}}>
//       <Text style={{fontSize:40}}>List</Text>
//       <ScrollView style={{marginBottom:50}}>
//       {
//         users.map((item)=><Text style={styles.item}>{item.name}</Text>)
//       }
//       </ScrollView>
//     </View>
//   );
// };

// const App = () => {
//   const users = [
//     { id: 1, name: "Sahil" },
//     { id: 2, name: "Shakti" },
//     { id: 3, name: "Amit" },
//     { id: 4, name: "Pratham" },
//     { id: 5, name: "Kashish" },
//     { id: 6, name: "Ananya" },
//     { id: 7, name: "Abhi" },
//     { id: 8, name: "Nonu" },
//     { id: 9, name: "Mitu" },
//     { id: 10, name: "Bob" },
//     { id: 11, name: "First" },
//     { id: 12, name: "Abbu" },
//     { id: 13, name: "Sunshine" },
//     { id: 14, name: "Gigi" },
//     { id: 15, name: "Never" }
//   ];
//   return (
//     <View>
//       <Text style={{ fontSize: 31 }}>Grid</Text>
//       <View style={{ flex: 1,flexDirection:'row',flexWrap:'wrap' }}>
//           {users.map((item) => (
//             <Text style={{}}>{item.name}</Text>
//           ))}
//       </View>
//     </View>
//   );
// };

// const App = () => {
//   const users = [
//     {
//       id: 3,
//       name: "Sahil",
//       email: "sahil@gmail"
//     },
//     {
//       id: 5,
//       name: "Shakti",
//       email: "shakti@gmail"
//     },
//     {
//       id: 7,
//       name: "Sharma",
//       email: "sharma@gmail"
//     }
//   ];
//   return (
//     <View>
//       <Text style={{ fontSize: 31 }}>List with Flatlist and Array</Text>
//       <View style={{ flex: 1,flexDirection:'row',flexWrap:'wrap'}}>
//           <FlatList
//             data={users}
//             renderItem={({ item }) => <UserData item={item} />}
//             />
//       </View>
//     </View>
//   );
// };
// export default App;
// const UserData=(props)=>{
//   const item=props.item;
//   return (
//     <View style={styles.box}>
//     <Text style={styles.item}>{item.name}</Text>
//     <Text style={styles.item}>{item.email}</Text>
//   </View>
//   )
// }

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name:"Sahil",
//       age:23
//     }
//   }
//   updateName(val){
//     this.setState({name:val})
//   }
//   render(){
//     return(
//       <View>
//         <Text style={styles.box}>Class Component {this.state.name} {this.state.age}</Text>
//         <TextInput
//         style={styles.textInput}
//         placeholder="Enter the text"
//         onChangeText={(text)=>
//         this.updateName(text)}
//         />
//         <Button title="Click Here" onPress={this.fruit}/>
//       </View>
//     )
//   }}

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(100);
//   return (
//     <View>
//       <Text style={{ fontSize: 40 }}>
//         {data} Life cycle with the effect {count}{" "}
//       </Text>
//       <Button title="Update Count" onPress={() => setCount(count + 1)} />
//       <Button title="Update Data" onPress={() => setData(data + 1)} />
//       <Users info={{ data, count }} />
//     </View>
//   );
// };
// const Users = (props) => {
//   useEffect(() => {
//     console.warn("On update data");
//   }, [props.info.data]);
//   useEffect(() => {
//     console.warn("On update count");
//   }, [props.info.count]);
//   return (
//     <View>
//       <Text>Here Count is {props.info.count}</Text>
//       <Text>Here Data is {props.info.data}</Text>
//     </View>
//   );
// };

// const App = () => {
//   const [show,setShow]=useState(true)
//   return (
//     <View>
//       <Text> Show/Hide component </Text>
//       <Button title="toggle component" onPress={()=>setShow(!show)}/>
//       {
//         show ? <User /> : null
//       }
//     </View>
//   );
// }
// const User=()=>{
//   let timer=setInterval(()=>{
//     console.log("Time call")
//   },2000)
//   useEffect(()=>{
//     return ()=>clearInterval(timer)
//   })
//   return (
//     <View>
//       <Text style={styles.box}>User component</Text>
//     </View>
//   )
// }

// const App = () => {
//   return (
//     <View style={{flex:1}}>
//       <Text>Responsive Layout</Text>
//       <View style={{flex:1,backgroundColor:'blue',flexDirection:'row'}}>
//         <View style={{flex:1,backgroundColor:'skyblue',margin:10}}></View>
//         <View style={{flex:1,backgroundColor:'lightgreen',margin:10}}></View>
//         <View style={{flex:1,backgroundColor:'violet',margin:10}}></View>
//       </View>
//       <View style={{flex:1,backgroundColor:'orange'}}></View>
//       <View style={{flex:1,backgroundColor:'gray'}}></View>
//     </View>
//   );
// }

// const App = () => {
//   return (
//     <View>
//       <TouchableHighlight>
//         <Text style={[styles.button,stylez.success]}>Success</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={styles.button}>Button</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button,stylez.primary]}>Primary</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button,stylez.warning]}>Warning</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button,stylez.error]}>Error</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button,stylez.water]}>Water</Text>
//       </TouchableHighlight>
//     </View>
//   );
// }
// const stylez= StyleSheet.create({
//   success:{
//     backgroundColor:"green",
//     color:'white'
//   },
//   primary:{
//     backgroundColor:'yellow',
//     color:'black'
//   },
//   warning:{
//     backgroundColor:'gold',
//     color:'green'
//   },
//   error:{
//     backgroundColor:'red'
//   },
//   water:{
//     backgroundColor:'purple',
//     color:'lightblue'
//   }
// })

// const App = () => {
//   const [select, setSelect] = useState(1);
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <TouchableOpacity onPress={() => setSelect(1)}>
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <View style={styles.radio}>
//             {select === 1 ? <View style={styles.radiobg}></View> : null}
//           </View>
//           <Text style={{ fontSize: 20 }}>Radio 1</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => setSelect(2)}>
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <View style={styles.radio}>
//             {select === 2 ? <View style={styles.radiobg}></View> : null}
//           </View>
//           <Text style={{ fontSize: 20 }}>Radio 2</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const App = () => {
//   const skills = [
//     { id: 1, name: "Java" },
//     { id: 2, name: "C++" },
//     { id: 3, name: "PHP" },
//     { id: 4, name: "React" }
//   ];
//   const [select, setSelect] = useState();
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       {skills.map((item, index) => (
//         <TouchableOpacity key={index} onPress={() => setSelect(item.id)}>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <View style={styles.radio}>
//               {select === item.id ? <View style={styles.radiobg}></View> : null}
//             </View>
//             <Text style={{ fontSize: 20 }}>{item.name}</Text>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };
