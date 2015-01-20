.. PiniEngine documentation master file, created by
   sphinx-quickstart on Wed Dec 10 17:29:29 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. raw:: html

    <script src="../../_static/zeroclipboard/ZeroClipboard.js"></script>
    <script src="../../_static/copyClipboard.js"></script>

.. _06_튜토리얼:

06. 내보내기 기능을 사용하여 내 게임을 배포하기
**********************************************************

피니엔진에서 만든 프로젝트는 현재 윈도우와 안드로이드에서 설치/배포 가능한 형태로 만들어주는 내보내기 기능을 가지고 있습니다.

.. contents:: 목차

----------

일단 내보내기를 하기 위해선 아래 사진과 같이 빨간색 화살표 쳐있는 부분에서 원하는 OS용 내보내기를 누르시면 됩니다.

.. image:: http://i.imgur.com/4dwxV3I.png
    :scale: 100%

----------

윈도우 내보내기
==============================================
일단 윈도우 내보내기를 먼저 해봅시다. '파일-익스포트-윈도우' 버튼을 누르면 하단의 사진과 같은 창을 보실수 있을겁니다.
빨간색 사각형 부분의 버튼을 사용하여 .exe 확장자 형식의 실행 파일이 생길 위치 정해줄 수 있습니다.
또한 주황색 사각형 부분의 버튼을 사용하여 실행 파일의 아이콘 이미지를 원하는 이미지로 정해줄 수 있습니다.

.. image:: http://i.imgur.com/bIvEfbZ.png
    :scale: 100%

아래 사진과 같이 '게임명','버전정보','저장위치','배포자명'과 아이콘 이미지를 모두 정하셨다면 '익스포트' 버튼을 눌러보도록 합시다.

.. image:: http://i.imgur.com/Nr7naIK.png
    :scale: 100%

그러곤 조금 기다리시면 아래와 같은 창을 보실수 있으실 겁니다.

.. image:: http://imgur.com/XCsbUG9.png
    :scale: 100%

여기서 '인스톨러 생성' 버튼을 누르시면 아래와 같은 화면을 보실수 있습니다.

.. image:: http://i.imgur.com/G3ucZ9b.png
    :scale: 100%

그리곤 또 한번 더 '인스톨러 생성' 버튼을 누르시면 아까 전 익스포트 '저장위치'로 정해 놓으신 경로에서 'installer.exe' 파일이 있는것을 확인할 수 있을겁니다.

----------

안드로이드 내보내기
==============================================
다음으로 안드로이드 내보내기를 해보도록 합시다. '파일-익스포트-안드로이드' 버튼을 누르면 하단의 사진과 같은 창을 보실수 있을겁니다.

.. image:: http://i.imgur.com/AqGSzLV.png
    :scale: 100%

여기서 다음 버튼을 누르시면 아래 사진과 같이 안드로이드에 내보내기에 필요한 `ADT(Android Developer Tools) <http://developer.android.com/tools/help/adt.html>`_ 라던가 `JDK(Java Development Kit) <http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html>`_ 등을 자동으로 설치합니다.

.. image:: http://i.imgur.com/yIRe9ro.png
        :scale: 100%

.. warning::
    ADT 업데이트 시에는 아래와 같이 정지 될 수 도 있습니다. 4,5분 정도 기다려 보시기 바랍니다.

    .. image:: http://i.imgur.com/83ZV5pk.png
        :scale: 100%

    .. image:: http://i.imgur.com/8nmv37f.png
        :scale: 100%

JDK와 ADT등이 정상적으로 설치 되었다면 다음과 같은 창을 확인할 수 있습니다.
비밀번호는 자신이 만들었다는 것을 입증하는 서명과도 같은것이므로 꼭 입력해야 합니다. 비밀번호는 영문자와 숫자의 조합으로만 입력 가능합니다.

.. image:: http://i.imgur.com/S0ZcPjZ.png
        :scale: 100%

다음 버튼을 누르면 일련의 과정을 거친후 아래 화면과 같이 APK파일이 만들어지게 됩니다.

.. image:: http://i.imgur.com/tjbxqRR.png
        :scale: 100%

여기서 아래의 3가지 조건이 충족되면 "테스트 실행"버튼을 눌렀을때 모바일 기기에서 자동 설치 및 실행이 되게 됩니다.

#. 모바일 기기가 PC에 USB로 연결되어 있어야 합니다.
#. 연결된 모바일 기기에 맞는 USB드라이버가 PC에 설치되어 있어야 합니다.
#. 모바일 기기의 설정 앱에서 개발자 옵션이 켜져 있어야 합니다. 안드로이드의 경우 폰마다 개발자 옵션을 켜는 방법이 다를 수 있으니 인터넷에서 해당 기기의 개발자 옵션을 켜는 부분이 어디있는지 찾아 보시길 바랍니다.

수동 설치
-----------------------------------------------
만약 자동 설치에 문제가 있으시다면 뽑아낸 APK를 핸드폰에 옮겨 직접 실행시켜 설치시기 바랍니다.
어려움이 있으시다면 아래 링크 글을 참고 하시기 바랍니다.

`안드로이드 APK 설치방법 <http://ggari.tistory.com/186>`_


ADK,JDK 수동 설치 및 경로 수동 지정
-----------------------------------------------
만약 특정 버전의 JDK나 NDK를 사용하시기를 원하신다면 원하는 버전을 설치후 해당 SDK가 설치된 폴더를 내보내기시 설정하시면 됩니다.

`JDK 다운로드 링크 <http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>`_ 

JDK의 경우 위의 링크로 들어가 아래 사진에 빨간색 표시되어진 부분을 참고하시어 약관 동의 체크와 OS별 설치파일을 선택하시면 됩니다.

.. image:: http://i.imgur.com/7urgUMo.png
        :scale: 100%

`NDK 다운로드 링크 <https://developer.android.com/tools/sdk/ndk/index.html#Installing>`_ 

NDK의 경우 위의 링크로 들어가 아래 사진의 빨간색 표시되어진 부분을 참고하시어 OS별 설치파일을 선택하시면 됩니다.

.. image:: http://i.imgur.com/H1JOCHg.png
        :scale: 100%
