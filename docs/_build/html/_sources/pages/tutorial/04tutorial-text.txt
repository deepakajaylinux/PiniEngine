.. PiniEngine documentation master file, created by
   sphinx-quickstart on Wed Dec 10 17:29:29 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. raw:: html

    <script src="../../_static/zeroclipboard/ZeroClipboard.js"></script>
    <script src="../../_static/copyClipboard.js"></script>

.. _04_튜토리얼:

04. 대화,독백 그리고 텍스트 찍어보기
**********************************************

피니엔진은 비주얼 노벨 게임 장르에 특화된 게임 엔진인 만큼 해당 장르에서 자주 쓰여 정형화된 기능들을 좀 더 쓰기 쉽게
가공하여 제공하고 있습니다. 여기선 그러한 특징들중 대화와 같은 텍스트 중심의 기능들의 사용법에 대해서 설명 드리고자 합니다.

.. contents:: 목차

먼저 대화 해보기
==============================================
일단 저번 시간에 배웠듯이 배경과 캐릭터들을 :ref:`매크로_이미지` 를 이용하여 설치 해봅시다.

.. raw:: html

    <button id="text-example1">예제 복사하기</button>

    <script>
        var code = "[이미지 아이디=\"배경\" 파일명=\"복도3.png\" 효과=\"페이드\" 크기=\"화면맞춤\"]\n\n[이미지 아이디=\"피니\" 파일명=\"피니_노멀.png\"  크기=\"0.65,0.65\" 위치=\"100,410\"]\n[이미지 아이디=\"석대\" 파일명=\"석대_짜증.png\" 크기=\"0.7,0.7\" 위치=\"680,410\"]";
        
        copyClipboard("text-example1",code)
    </script>

.. image:: http://i.imgur.com/34m344P.png
    :scale: 100%


캐릭터들을 설치했다면 아래와 같이 스크립트를 작성하여 대화를 해봅시다.


.. raw:: html

    <button id="text-example2">예제 복사하기</button>

    <script>
        var code = "[이미지 아이디=\"배경\" 파일명=\"복도3.png\" 효과=\"페이드\" 크기=\"화면맞춤\"]\n\n[이미지 아이디=\"피니\" 파일명=\"피니_노멀.png\"  크기=\"0.65,0.65\" 위치=\"100,410\"]\n[이미지 아이디=\"석대\" 파일명=\"석대_짜증.png\" 크기=\"0.7,0.7\" 위치=\"680,410\"]\n\n[대화창수정 아이디=\"대화\" 이미지=\"textArea.png\" 색상=\"255,255,255,255\" 위치=\"0,700\" 영역=\"800,300\"  여백=\"30,40\" ]\n[대화창수정 아이디=\"대화\" 이름창이미지=\"nameLabel.png\" 이름창색상=\"255,255,255,255\" 이름창위치=\"20,480\" 이름창폰트크기=\"30\" 이름창폰트색상=\"97,68,36,255\" ]\n\n[대화 이름=\"피니\" ]\n;안녕 이름이 뭐니?\n[대화 이름=\"석대\" ]\n;난 석대라고 한다.";
        
        copyClipboard("text-example2",code)
    </script>

.. image:: http://i.imgur.com/oJR3XvK.png
    :scale: 100%

.. seealso::
    :ref:`매크로_대화창수정` 을 사용하여 대화창과 이어서 나올 독백창을 커스터마이징 할 수 있습니다.

이어서 독백을 해보기
==============================================
ㅁㅁㅁㅁ

마지막으로 텍스트 찍어보기
==============================================
ㅁㅁㅁㅁ