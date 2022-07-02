/*
so we had our methods , we extracted them , that was very easy and cozy , it made our COmponent
much much .... simpler .
then we extended it .
like class InputForm extends Form {

}
 */

// so we had an onChange method like bellow :
state = {
    account:{username:'',password:''},
    errors:{}
}
handleChange = ({currentTarget:input}) => {
    const account = {...this.state.account};
    const errors = {};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) {
        errors[input.name] = errorMessage;
    } else {
        delete errors[input.name];
    }
    account[input.name] = input.value;
    this.setState({account,errors});
}

validateProperty = ({name,value}) => {

}