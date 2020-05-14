import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

const Wrapper = styled.section`
flex-grow: 1;
background: #ffffff;
padding: 12px 16px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
 > ol{
 margin: 0 -12px;
  > li{
  background: #d9d9d9;
 border-radius: 18px;
 display: inline-block;
 padding: 4px 18px;
 font-size: 14px;
 margin: 4px 12px;
 &.selected{
 background: grey;
 color:white
 }
  }
 }
 > button{
 background: none;
 border:none;
 padding: 2px 4px;
 border-bottom: 1px solid #333;
 color: #666;
 margin-top: 8px;
 } 
`;
type Props = {
    value: number[];
    onChange: (selected: number[]) => void

};
const TagsSection: React.FC<Props> = (props) => {
    const {tags, setTags} = useTags();

    const selectedTagIds = props.value;
    const onAddTag = () => {
        const tagName = window.prompt('請輸入想添加的標簽名');
        if (tagName !== null) {
            setTags([...tags, {id: createId(), name: tagName}]);
        }
    };
    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onChange([...selectedTagIds, tagId]);
        }
    };
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={
                        () => {onToggleTag(tag.id);}
                    } className={getClass(tag.id)}>{tag.name}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );
};
export {TagsSection};