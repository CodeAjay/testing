// const App = () => {
//   const [show, setShow] = useState(false);
//   const display = () => {
//     setShow(true);
//     setTimeout(() => {
//       setShow(false);
//     }, 5000);
//   };
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       {show ? (
//         <ActivityIndicator size={50} color="blue" animating={show} />
//       ) : null}
//       <Text> Here i am</Text>
//       <View style={styles.button}>
//         <Button title="Click" onPress={display} />
//       </View>
//     </View>
//   );
// };

// const App = () => {
//   const [show,setShow]=useState(false)
//   return (
//     <View style={styles.main}>
//       <Modal transparent={true} visible={show}
//       animationType="fade">
//         <View style={styles.centerView}>
//           <View style={styles.modalView}>
//             <Text style={styles.text}>Hello code step by step </Text>
//             <Button title="close modal" onPress={()=>setShow(false)}/>
//           </View>
//         </View>
//       </Modal>
//       <View style={styles.button}>
//         <Button title="Open Modal" onPress={()=>setShow(true)} />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   main: {
//     flex: 1
//   },
//   button: {
//     flex: 1,
//     justifyContent: "end"
//   },
//   centerView:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   modalView:{
//     backgroundColor:'#fff',
//     padding:25,
//     borderRadius:25,
//     shadowColor:'black',
//     elevation:10,
//     borderWidth:3,
//     width:270
//   },
//   text:{
//     fontSize:25,
//     marginBottom:20
//   }
// });

// const App = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <View style={styles.main}>
//       <Modal transparent={true} visible={show} animationType="fade">
//         <View style={styles.centerView}>
//           <View style={styles.modalView}>
//             <Text style={styles.text}>Hello code step by step </Text>
//             <Button title="close modal" onPress={() => setShow(false)} />
//           </View>
//         </View>
//       </Modal>
//       <View style={styles.button}>
//         <Button title="Open Modal" onPress={() => setShow(true)} />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   main: {
//     flex: 1
//   },
//   button: {
//     flex: 1,
//     justifyContent: "end"
//   },
//   centerView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   modalView: {
//     backgroundColor: "#fff",
//     padding: 25,
//     borderRadius: 25,
//     borderWidth: 1,
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 0.4,
//     width: 270
//   },
//   text: {
//     fontSize: 25,
//     marginBottom: 20
//   }
// });
