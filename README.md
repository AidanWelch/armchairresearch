# armchairresearch
Source for armchairresearch.org

# Page Schema:
```json
{
    "_id": "pageid",
    "title": "string",
    "category": "string",
    "subcategory": "string",
    "content": "string",
    "changes": [{
        "changeid": "int(starting from 0, basically an unsigned long)",
        "author": "username or ip",
        "datetime": "string",
        "content": "string",
    }],
    "protected": "bool",
    "hidden": "bool",
    "comments": [{
        "commentid": "int(starting from 0, basically an unsigned long)",
        "author": "string",
        "datetime": "string",
        "epochtime": "int",
        "content": "string"
    }]
}
```

~~The pages content is reconstructed from the change history.  There is a bit of a trade off here; storing the constructed page would require more storage but would be more effecient.  This could change to that.~~  Simplicity of code is an important on this project, and it was found essentially 2 seperate copies allows that.

I am torn on whether to include subcategories or not.  I am also torn on whether to store the category list in the DB, hardcoded into the server, or possibly even in a local file.

Comments may or may not be included, same for epochtime(investigate Year 2038 problem) or datetime.

# User Schema:
```json
{
    "_id": "userid",
    "name": "string",
    "email": "string",
    "password": "hashed",
    "admin": "bool",
    "changes": ["changeurl(armchairresearch.com/page/:pageid/change/:changeid)"],
    "comments": ["commenturl(armchairresearch.com/page/:pageid/comment/:commentid"]
}
``` 

Blog will eventually be moved to a DB.