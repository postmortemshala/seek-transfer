import { Flex } from "antd";

import { Card } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const Hero = () => {

  
  return (
    <Flex justify="space-evenly" gap={30} style={{backgroundColor:'black', width:'100%',height:'100vh'}}>
      <Flex justify="space-between" gap={30}>
        <div >
          <Card hoverable  style={{ width: 380, height: 490,  marginTop:'80px',marginLeft:'30px',borderRadius:'20px'}}>
            

            <Flex align="center">
            <PlusCircleOutlined className="bg-blue-200"
              style={{
               
                fontSize: "50px",
               color:'black',
               
                borderRadius: "40px",
              }}
            />
             <div style={{marginLeft:'20px',}}><p style={{fontSize:'30px',fontWeight:'bold'}}>Upload File </p>
             <p style={{fontSize:'19px',fontWeight:'bold'}} >Or Select is a file</p>
             <h1 style={{width:'155px',height:'2px', backgroundColor:'black'}}></h1>
             </div>


            </Flex>
            <hr  style={{marginTop:'80px'}}/>
            <p className="bg-green-50  p-2 " style={{textAlign:'center',fontSize:'20px', fontWeight:'bold'}}>Up to 2 GB free / Increase   
            {/* <img style={{width:'15px',height:'15px'}} src="/increase.png" alt="" /> */}
            </p>
            <hr />
    <p style={{marginTop:'10px', fontSize:'20px', fontWeight:'bold', marginLeft:'10px'}} className="p-3">Title..</p>
    <hr />
    <p style={{marginTop:'20px', fontSize:'20px', fontWeight:'bold',marginLeft:'10px'}} className="p-4">Message...</p>
    <hr />

<MinusCircleOutlined style={{fontSize:'40px',marginTop:'30px'}} className="bg-blue-100 rounded-2xl "  />

<button style={{width:'200px',height:'40px',fontSize:'20px',fontWeight:'bold',  borderRadius:'50px',marginLeft:'50px'}} className="bg-blue-300">
   Get a link</button>


          </Card>
        </div>
        <div className=" text-center  rounded-xl" style={{width:'350px',height:'400px',marginTop:'150px',color: "white"}}>
          <h1 style={{ fontSize: "40px", }}>
            Your time is precious
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, corrupti  inventore! adipisicing elit.adipisicing elit.
          </p>

          <button
            style={{
              border: "2px solid black",
              width: "150px",
              height: "50px",
              borderRadius:'50px',
              backgroundColor:'ButtonFace',
              color:'black',
              marginTop:'50px'
            }}
          >
            Subscribe
          </button>
        </div>
      </Flex>

      <Flex >
        <div style={{width:'400px',height:"400px",marginTop:'100px'}}>
         <img style={{width:'400px',height:'400px'}}  src="image.png" alt="" />
        </div>
      </Flex>
    </Flex>
  );
};

export default Hero;
