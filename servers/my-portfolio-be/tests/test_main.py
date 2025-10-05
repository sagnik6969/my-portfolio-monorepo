from main import add_numbers, main


def test_add_numbers():
    # Test positive numbers
    assert add_numbers(5, 10) == 15
    # Test negative numbers
    assert add_numbers(-1, -2) == -3
    # Test zero
    assert add_numbers(0, 0) == 0
    # Test mixed numbers
    assert add_numbers(-5, 10) == 5


def test_main(capsys):
    # Test the main function output
    main()
    captured = capsys.readouterr()
    assert captured.out == "Sum of 5 and 10 is:\n15\n"
