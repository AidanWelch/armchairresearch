# armchairresearch
Source for armchairresearch.org

# Page Schema:
```json
{
    _id: "pageid",
    title: "string",
    category: "string",
    subcategory: "string",
    changes: [{
        changeid: "int(starting from 0, basically an unsigned long)",
        (author: "string") || (ip: "string"),
        datetime: "string",
        content: "string",
    }],
    protected: "bool",
    hidden: "bool",
    comments: [{
        commentid: "int(starting from 0, basically an unsigned long)",
        author: "string",
        datetime: "string",
        epochtime: "int",
        content: "string"
    }]
}
```

The pages content is reconstructed from the change history.  There is a bit of a trade off here; storing the constructed page would require more storage but would be more effecient.  This could change to that.

Comments may or may not be included, same for epochtime(investigate Year 2038 problem) or datetime.

# User Schema
```json
{
    _id: "userid",
    name: "string",
    email: "string",
    password: "hashed",
    admin: "bool",
    changes: ["changeurl(armchairresearch.com/page/:pageid/change/:changeid)"],
    comments: ["commenturl(armchairresearch.com/page/:pageid/comment/:commentid"]
}
```