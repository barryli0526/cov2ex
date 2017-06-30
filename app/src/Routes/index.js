import React from 'react';
import { Route } from 'react-router';

import * as layout from '../Layout';

import * as pages from '../Pages'

const Root = layout.Root;

export default (
    <Root>
        <Route path="/" exact component={pages.Home} />        
        <Route path="/t/:id" component={pages.Topic} />
    </Root>
)
