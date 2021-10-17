function validate(values)
{
    let errors={}
    if(!/^[a-z][a-z\s]*$/i.test(values.dname))
    {
        errors.dname="Enter Valid Dress Name"
    }
    if(!/\.(jpeg|jpg|gif|png)$/.test(values.dimage))
    {
        errors.dimage="Enter Valid Url"
    }
    if(!/^[a-z][a-z\s]*$/i.test(values.ddescp))
    {
        errors.ddescp="Enter Valid Description"
    }
    return errors;
}
export default validate;