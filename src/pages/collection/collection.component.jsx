import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPageContainer, CollectionTitle, ItemsContainer, ItemsContainerButton } from './collection.styles';

const CollectionPage =({collection}) =>{
    const {title, items} = collection;
    return(
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
    <ItemsContainer>
        {
            items.map(item =>(
                <ItemsContainerButton key={item.id} item={item} />
            ))
        }
    </ItemsContainer>
    </CollectionPageContainer>
    )
}

const mapStateToProps =(state,ownProps) =>(
    {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);