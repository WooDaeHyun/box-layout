# 🐥 Box positioning

```
요구사항에 맞게 Box를 위치시켜 layout을 구현했습니다.
```

<h3>✨구현 결과물</h3>

![스크린샷 2023-07-19 오후 10 51 06](https://github.com/WooDaeHyun/box-layout/assets/113018070/02508762-8378-4700-af1b-c8e5eeb3fc65)

## 1. 배포 주소

<div align="center">
  <h3><a href="https://positioning-box-layout.netlify.app/">🚀 구경 하기</a></h3>
  <div>배포주소 : ( https://positioning-box-layout.netlify.app )</div>
</div>
<br/>

```javascript
실행 명령어 `npm run dev`
```

## 2. 사용 기술

<div align="center">
  
![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=4976C1&logo=TypeScript&logoColor=FFFFFF&label=)
![Next](https://img.shields.io/static/v1?style=for-the-badge&message=Next&color=000000&logo=Next.js&logoColor=FFFFFF&label=)
![](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>
<br />

## 3. 구현 방식

&nbsp;&nbsp;해당 프로젝트를 진행하면서 가장 중요하게 생각한 점은 **코드의 양을 최대한 줄이고** `하나의 Box 컴포넌트`를 통해 **모든 Box들의 크기와 위치에 맞게 배치**시키는 것이었습니다.
그리고 프로젝트를 구현하기 위해 참고해야 하는 이미지에는 중요한 규칙이 있었습니다. 바로 Box들의 크기가 부모 Box의 1/4 크기로 줄어든다는 점입니다.

&nbsp;&nbsp;해당 규칙을 이용해 부모 자식 관계를 통해 box 안의 자식 box들의 크기를 별도의 props 없이 줄일 수 있었습니다. 또한 자식 box는 부모 박스의 정가운데를 기준으로 사전에 정의한 위치를 props로 념겨 translate을 통해 원하는 곳에 위치시킬 수 있었습니다. **이를 통해 코드양을 많이 줄일 수 있었습니다.**


![스크린샷 2023-07-19 오후 11 14 12](https://github.com/WooDaeHyun/box-layout/assets/113018070/fc27e868-20cd-406f-9237-a48da357c10e)


<br />

## 4. 프로젝트를 진행하며

- 해당 UI를 구성하는 방법에는 여러가지가 있겠지만 하나의 Box 컴포넌트를 통해 모든 Box들을 조작하게 하는 것을 목표로 설정하고 진행했습니다.
- 또한 z-index의 사용을 피하고자 정가운데를 기준으로 미리 정의해 둔 위치들을 기준으로 translate하여 Box들을 위치시켰습니다. z-index의 경우 설정 조건들이 꽤 까다롭다고 생각하고 코드를 유지 보수하는 측면에서도 가급적 지양하는 편이 좋다고 생각했기 때문입니다.
- 그리고 자식 Box는 부모 Box의 정가운데를 기준으로 이동하게 되므로 코드의 양을 많이 줄일 수 있고, 이를 통해 가독성을 높일 수 있었다고 생각합니다.

<br/>
<br/>

```
이상으로 저의 프로젝트 소개를 마치겠습니다. 긴 글 읽어주셔서 감사합니다. 🖐️
```


