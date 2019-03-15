import React, { Component } from 'react';

function List(props) {
    let { route, urls, items, field, pageName } = props;
    if (urls) {
        // accept single URL and object
        if (typeof(urls) === 'string') {
            urls = [ urls ];
            items = [ items ];
        }
        // deal with holes in the data set
        items = urls.map((url, index) => {
            let item = (items) ? items[index] : null;
            if (!item) {
                item = { url, pending: true };
            }
            return item;
        });
    }
    if (!items) {
        return null;
    }
    if (items.length === 0) {
        return <ul className="empty"><li><span>none</span></li></ul>;
    }
    return <ul>{items.map(renderItem)}</ul>;

    function renderItem(item, i) {
        const id = route.extractID(item.url);
        const url = route.find(pageName, { id });
        const text = item.pending ? '...' : item[field];
        const linkProps = {
            href: url,
            className: (item.pending) ? 'pending' : undefined,
        };
        return <li key={i}><a {...linkProps}>{text}</a></li>;
    }
}

List.defaultProps = {
    field: 'name'
};

// set display name so it appears in React Dev Console when code is uglified
List.displayName = 'List';

export {
    List as default,
    List
};
