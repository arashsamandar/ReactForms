/*
Ok , as you saw when we had type={type} id={id} and as such repeated pattern ,
we decided to use ...ref
 */

import Input from "./input";

const MyFunc = ({name,...ref}) => {
    <Input
        {ref}
        />
}