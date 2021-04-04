/*
Copyright (C) 2017  Paul Marks  http://www.pmarks.net/

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Flags are bitwise-OR'd across all connections to a domain.
const FLAG_SSL = 0x1;
const FLAG_NOSSL = 0x2;
const FLAG_UNCACHED = 0x4;
const FLAG_CONNECTED = 0x8;
const FLAG_WEBSOCKET = 0x10;

function nat64To4(addr){
    let regex= /^64:ff9b::(.*)/;
    let match = addr.match(regex);
    let hex_split = match[1].split(":");
    let ipvhex="";
    for (hex in hex_split){
      ipvhex+=hex_split[hex].padStart(4, "0")
    }
    let bin = parseInt(ipvhex, 16).toString(2).padStart(32, '0');
    let oct_split=bin.match(/.{1,8}/g);
    legacy_addr="";
    for (section in oct_split){
      legacy_addr+=parseInt(oct_split[section].padStart(4,"0"), 2);
      if(section!=3){legacy_addr+=".";}
    }
    return legacy_addr;
  
  }