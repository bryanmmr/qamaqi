import { Input, FormControl, FormLabel, InputGroup, InputLeftElement, FormErrorMessage, Icon } from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
import { useController } from "react-hook-form";
import { useRef } from "react";

interface UploadPropsTypes {
  name: string,
  placeholder: string,
  acceptedFileTypes: string,
  children: string,
  isRequired: boolean,
}
const FileUpload = ({ name, placeholder, acceptedFileTypes, children, isRequired=false }:UploadPropsTypes) => {
  const inputRef = useRef();
  const {
    field: { ref, value, ...inputProps },
  } = useController({
    name,
    rules: { required: isRequired },
  });

  return (
    <FormControl isRequired>
      <FormLabel htmlFor="writeUpFile">{children}</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiFile} />}
        />

        <Input
          placeholder={placeholder || "Your file ..."}
          value={value}
        />
      </InputGroup>
    </FormControl>
  );
}

export default FileUpload;
