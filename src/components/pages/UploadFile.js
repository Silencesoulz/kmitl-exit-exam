import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Flex,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  Progress,
} from '@chakra-ui/react'

import { uploadFromBlobAsync } from '../Storage'

function UploadFile() {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [fileshowname, setFileshowname] = useState(null)
  const [picture, setPicture] = useState(null)

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles?.[0]

    if (!file) {
      return
    }

    setIsLoading(true)
    setError(null)
    setMessage(null)
    setFileshowname(null)
    

    try {
      await uploadFromBlobAsync({
        blobUrl: URL.createObjectURL(file),
        name: `${file.name}_${Date.now()}`,
        
      })
    } catch (e) {
      setIsLoading(false)
      setError(e.message)
      return
    }

    setIsLoading(false)
    setMessage('อัพโหลดรูปภาพสำเร็จ') 
    setFileshowname(`${file.name}`)
    

  },[])


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="container">
        <p>ให้นักศึกษาเปลี่ยนชื่อไฟล์ดังนี้ ( เช่น 640xxxxx_ชื่อ )</p>
        <p>นักศึกษาสามารถเลือกไฟล์ในการอัพโหลดได้เพียง 1 ไฟล์เท่านั้น</p>
        <br/>
      <Flex
        bg="#dadada"
        w="auto"
        h={220}
        justify="center"
        align="center"
        p={50}
        m={2}
        borderRadius={15}
        textAlign="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isLoading ? (
          <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          />
        ) : isDragActive ? (
          <Text>Drop the files here...</Text>
        ) : (
          <Text>อัพโหลดไฟล์รูปภาพผลการสอบของนักศึกษา</Text>
        )}
      </Flex>
      <br/>
      <Text>Filename : {fileshowname}</Text>
 
      <br/>
      {(error || message) && (
          <Alert
          status={error ? 'error' : 'success'}
          variant="subtle"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="50px"
          width="auto"
        >
          <AlertIcon />
          <AlertDescription>{error || message}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default UploadFile