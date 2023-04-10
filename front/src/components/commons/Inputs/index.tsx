
import { useState } from "react";
import { Input } from "@chakra-ui/react";

export function InputComponents() {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
      <Input
        placeholder="Digite algo..."
        bg={isFocused ? "white" : "gray.100"}
        transition="background-color 0.3s"
        _placeholder={{ color: "gray.400" }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        w="315px"
        h="48px"
      />
  );
}

export function InputComponentsBig(){

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    return(
        
        <Input
        placeholder="Digite algo..."
        bg={isFocused ? "white" : "gray.100"}
        transition="background-color 0.3s"
        _placeholder={{ 
            color: "gray.400"
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        textAlign="left"
        pl="4"
        paddingBottom="10"
        defaultValue=""
        w="315px"
        h="80px"
    />
    )
}