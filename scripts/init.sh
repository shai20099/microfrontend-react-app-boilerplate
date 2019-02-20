#!/bin/bash

echo "Please insert your Microfrontend uniq ID: "
read id
if (( #{$id} < 8 )) || (( #{$id} > 32 )); then echo "The ID length should be between 8 to 32"; exit
else
  find . -type f -exec sed -i "" "s/my-awesome-microfrontend/$id/g" {} \;
  if (( $? == 0 )); then
    echo "Initiated the project successfully! Enjoy your coding :)";
  else
    echo "Oops.. Something went wrong :/"
  fi
fi
