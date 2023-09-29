import mime_to_types from "./mime_to_types";

import type_to_mime from "./type_to_mime";

export const lookUp = (_fileName: string): string =>{

    _fileName =  _fileName.indexOf('.') !== -1 ? (_fileName.split(".").pop() as  string) : _fileName;

    return type_to_mime[_fileName]; 

}