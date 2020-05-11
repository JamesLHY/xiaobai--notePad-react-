import styled from 'styled-components';
import React, {useState} from 'react';
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

const TagsSection: React.FC = () =>{
    const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
    const [selectedTag,setSelectedTag] = useState<string[]>([]);
    const onAddTag=()=>{
        const tagName = window.prompt('請輸入想添加的標簽名');
        if(tagName!==null){
            setTags([...tags,tagName])
        }
    };
    const onToggleTag = (tag:string)=>{
const index = selectedTag.indexOf(tag)
        if(index>=0){
           setSelectedTag(selectedTag.filter(t =>t !==tag))
        }else{
            setSelectedTag([...selectedTag, tag])
        }
    };
    return(
        <Wrapper>
            <ol>
                {tags.map(tag =>
                <li key={tag} onClick={()=>{onToggleTag(tag);}
                } className={selectedTag.indexOf(tag)>=0 ?'selected' :''}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
};
export {TagsSection}