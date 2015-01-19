.. PiniEngine documentation master file, created by
   sphinx-quickstart on Wed Dec 10 17:29:29 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

애니메이션 관련
**********************************************

.. _매크로_애니메이션:

애니메이션 매크로
===============================================

애니메이션 매크로는 다른 매크로와 달리 ``타입`` 매개변수에 어떤 종류의 애니메이션 효과가 전달 됬는지에 따라
전달 해야할 매개변수의 종류와 갯수가 달라집니다. 타입에 따른 전달 매개변수는 :ref:`자료형_애니메이션효과` 에 자세히 설명되어 있습니다.

.. function:: [애니메이션 아이디,타입]

   ``아이디`` 에 해당되는 :ref:`매크로_이미지` 혹은 :ref:`매크로_텍스트` 로 출력한 이미지나 텍스트에 ``타입`` 으로 전달된 애니메이션 효과를 줍니다.

   :param 문자열 아이디: ( **필수** ) 해당 이미지를 지칭하는 고유 아이디입니다.

   :param 타입: ( **필수** ) 보여질 이미지의 확장자를 포함한 파일명을 전달해야 합니다.
   :type 타입: :ref:`자료형_애니메이션효과`
