
import { useState } from "react";

import { FormLabel, Input } from "@chakra-ui/react";


export function InputComponents({size , height,label}:any) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <>
      <FormLabel>
        {label}
      </FormLabel>
    <Input
      placeholder="Digite algo..."
      bg={isFocused ? "white" : "gray.100"}
      transition="background-color 0.3s"
      _placeholder={{ color: "gray.400" }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      w={size || "315px"}
      h={height || "45px"}
    />
    </>
  );
}

export function InputComponentsBig({size , height ,label}:any){

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    return(
      <>
      <FormLabel>
        {label}
      </FormLabel>
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
          w={size || "315px"}
          h={height || "80px"} />
          </>
    )
}

