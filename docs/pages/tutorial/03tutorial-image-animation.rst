.. PiniEngine documentation master file, created by
   sphinx-quickstart on Wed Dec 10 17:29:29 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. raw:: html

    <script src="../../_static/zeroclipboard/ZeroClipboard.js"></script>
    <script src="../../_static/copyClipboard.js"></script>

.. _03_튜토리얼:

03. 애니메이션 효과 적용해보기
**********************************************

이전 튜토리얼에선 이미지를 띄워 보았습니다. 피니엔진에선 이미지에 대해 :ref:`매크로_애니메이션` 를 이용하여 애니메이션 효과를 줄 수 있습니다.

아래에선 멍구 이미지에 "상하흔들기" 애니메이션 효과를 주어 보았습니다.

.. raw:: html

    <button id="text-animation-example1">예제 복사하기</button>

    <script>
        var code = "[이미지 아이디=\"멍구2\" 파일명=\"멍구2.png\" 효과=\"페이드\" ]\n\n[애니메이션 아이디=\"멍구2\" 타입=\"상하흔들기\" 폭=50 횟수=3 시간=2 가속=\"사인인\"]\n\n[이미지 아이디=\"피니\" 파일명=\"피니_노멀.png\"  크기=\"0.65,0.65\" 위치=\"100,410\"]\n[이미지 아이디=\"석대\" 파일명=\"석대_짜증.png\" 크기=\"0.7,0.7\" 위치=\"680,410\"]";
        
        copyClipboard("text-animation-example1",code)
    </script>

.. image:: http://i.imgur.com/k2LVfeu.png
    :scale: 100%

좀 더 다양한 애니메이션 효과를 확인해보도록 합시다. 아래에선 피니,석대 캐릭터에 각각 걷기와 색상 애니메이션 효과를 주어보았습니다.


.. raw:: html

    <button id="text-animation-example2">예제 복사하기</button>

    <script>
        var code = "[이미지 아이디=\"멍구2\" 파일명=\"멍구2.png\" 효과=\"페이드\" ]\n\n[애니메이션 아이디=\"멍구2\" 타입=\"상하흔들기\" 폭=50 횟수=3 시간=2 가속=\"사인인\"]\n\n[이미지 아이디=\"피니\" 파일명=\"피니_노멀.png\"  크기=\"0.65,0.65\" 위치=\"100,410\"]\n[이미지 아이디=\"석대\" 파일명=\"석대_짜증.png\" 크기=\"0.7,0.7\" 위치=\"680,410\"]\n\n[클릭대기]\n[애니메이션 아이디=\"피니\" 타입=\"걷기\" 횟수=4 폭=20 확대=\"1.2,1.2\" 시간=1 가속=\"사인인\"]\n\n[클릭대기]\n[애니메이션 아이디=\"석대\" 타입=\"색상\" 시간=1.2 색상=\"255,0,0\" 가속=\"사인인\"]\n[대기 시간=2]\n[애니메이션 아이디=\"석대\" 타입=\"색상\" 시간=1.2 색상=\"255,255,255\" 가속=\"사인인\"]";
        
        copyClipboard("text-animation-example2",code)
    </script>

.. image:: http://i.imgur.com/O29kEVd.png
    :scale: 100%


.. seealso::
    스크립트 실행중에 :ref:`매크로_클릭대기` 를 만나게 되면 클릭할때 까지 대기 상태에 들어갑니다.
    또한 :ref:`매크로_대기` 를 사용하면 원하는 시간 만큼 대기 할 수 있습니다.


스크립트를 편집창에 작성 하셨다면 키보드의 F5버튼 혹은 메뉴에 '테스트 - 바로 테스트 F5'을 눌러서 어떻게 동작 하는지 확인 해보도록 합시다.
그리고 :ref:`매크로_애니메이션` 의 ``타입`` 매개변수에 :ref:`자료형_애니메이션효과` 를 이것저것 넣어 어떻게 동작되는지 한번 확인 해보도록 합시다.

다음 튜토리얼에선 대화 관련 함수를 이용해 글씨를 띄우는 방법을 배워보도록 하겠습니다.