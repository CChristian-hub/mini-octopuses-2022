import React from "react";
import {Dimensions } from 'react-native';
import {  Input } from 'react-native-elements';

export default function FormInput(props){
    switch(props.icon) {
        case 'updatePseudo':
            return( <Input  
                placeholder={props.placeholder} 
                placeholderTextColor="lightgrey" 
                onChangeText={props.onChangeText} 
                isFocus={() => console.log('focus')}
                focus={() => console.log('focus')}
                blur={() => console.log('deblur')}
                value={props.value} 
                style={{marginLeft:5, color:"#222163", fontSize:16, fontStyle:'normal'}}
                leftIcon={{ type: 'font-awesome', name: 'user-circle-o', color:"lightgrey"}}
                containerStyle = {{width:Dimensions.get('window').width/1.2, 
                height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10,marginTop:20}}
                inputContainerStyle = {{borderBottomWidth:0, 
                height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10}}
                rightIcon={{ type: 'font-awesome', name: 'pencil', color:"#222163"}}>
            </Input> )

        case 'updateEmail':
            return( 
                <Input  
                    placeholder={props.placeholder}
                    placeholderTextColor="lightgrey" 
                    onChangeText={props.onChangeText} 
                    focus={() => console.log('focus')}
                    blur={() => console.log('deblur')}
                    value={props.value} 
                    style={{marginLeft:5, color:"#222163", fontSize:16, fontStyle:'normal'}}
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o', color:"lightgrey"}}
                    containerStyle = {{width:Dimensions.get('window').width/1.2, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10,marginTop:20, fontStyle:'italic', color:'lightgrey'}}
                    inputContainerStyle = {{borderBottomWidth:0, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10, fontStyle:'italic', color:'lightgrey'}}
                    rightIcon={{ type: 'font-awesome', name: 'pencil', color:"#222163"}}>
                </Input> )
            
        case 'pseudo':
            return(
                <Input
                    onFocus={props.focus}   
                    onBlur={props.isDefocus}   
                    placeholder={props.placeholder} 
                    placeholderTextColor="lightgrey" 
                    onChangeText={props.onChangeText} 
                    value={props.value} 
                    style={{marginLeft:5, color:"#222163", fontSize:16, fontStyle:'normal'}}
                    leftIcon={{ type: 'font-awesome', name: 'user-circle-o', color:"lightgrey"}}
                    containerStyle = {{width:Dimensions.get('window').width/1.2, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10,marginTop:20}}
                    inputContainerStyle = {{borderBottomWidth:0, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10}}>
                </Input> 
            )
            case 'email':
            return(
                <Input  
                    onFocus={props.focus}   
                    onBlur={props.isDefocus} 
                    placeholder={props.placeholder}
                    placeholderTextColor="lightgrey" 
                    onChangeText={props.onChangeText} 
                    value={props.value} 
                    style={{marginLeft:5, color:"#222163", fontSize:16, fontStyle:'normal'}}
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o', color:"lightgrey"}}
                    containerStyle = {{width:Dimensions.get('window').width/1.2, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10,marginTop:20, fontStyle:'italic', color:'lightgrey'}}
                    inputContainerStyle = {{borderBottomWidth:0, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10, fontStyle:'italic', color:'lightgrey'}}>
                    
                </Input>
            )
            default :
            return(
                <Input  
                    onFocus={props.focus}   
                    onBlur={props.isDefocus} 
                    placeholder={props.placeholder}
                    placeholderTextColor="lightgrey"  
                    onChangeText={props.onChangeText} 
                    value={props.value} 
                    style={{marginLeft:5, color:"#222163", fontSize:16, fontStyle:'normal'}}
                    leftIcon={{ type: 'font-awesome', name: 'lock', color:"lightgrey"}}
                    containerStyle = {{width:Dimensions.get('window').width/1.2, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10, marginTop:20, marginBottom:20}}
                    inputContainerStyle = {{borderBottomWidth:0, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10}}>
                </Input>
            )
    }
}