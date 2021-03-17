// entries
if (!Object.entries) {
    console.log('不存在，创建')

    Object.entries = function( obj ){
        var ownProps = Object.keys( obj ),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
    };
}
