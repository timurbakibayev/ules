export function addItemsToForm(form, names, obj) {
    if (obj === undefined || obj === "" || obj === null) return addItemToForm(form, names, "");

    if (
        typeof obj == "string"
        || typeof obj == "number"
        || obj === true
        || obj === false
    ) return addItemToForm(form, names, obj);

    if (obj instanceof Date) return addItemToForm(form, names, obj.toJSON());

    // array or otherwise array-like
    if (obj instanceof Array) {
        return obj.forEach((v,i) => {
            names.push(`[${i}]`);
            addItemsToForm(form, names, v);
            names.pop();
        });
    }

    if (typeof obj === "object") {
        return Object.keys(obj).forEach((k)=>{
            names.push(k);
            addItemsToForm(form, names, obj[k]);
            names.pop();
        });
    }
}

export function addItemToForm(form, names, value) {
    var name = encodeURIComponent(names.join('.').replace(/\.\[/g, '['));
    value = encodeURIComponent(value.toString());
    form.push(`${name}=${value}`);
}