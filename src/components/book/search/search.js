import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Input, Flex } from "@chakra-ui/react";
import styled from "styled-components"; // styled-components 추가

// 드롭다운 메뉴 컨테이너 스타일
const DropdownContainer = styled.div`
  position: relative;
`;

// 검색창 컨테이너 스타일
const SearchContainer = styled.div`
  position: relative;
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("title");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Flex justifyContent="center" gap="20px" mt={4}>
      {/* 드롭다운 메뉴 */}
      <DropdownContainer>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button rightIcon={<ChevronDownIcon />} colorScheme="purple">
              Options
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item onSelect={() => setSearchOption("title")}>
              Title
            </DropdownMenu.Item>
            <DropdownMenu.Item onSelect={() => setSearchOption("author")}>
              Author
            </DropdownMenu.Item>
            {/* 필요한 다른 드롭다운 메뉴 아이템을 추가하세요. */}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </DropdownContainer>

      {/* 검색 창 */}
      <SearchContainer>
        <Input
          placeholder="검색하세요"
          value={searchTerm}
          onChange={handleInputChange}
          colorScheme="orange"
        />
      </SearchContainer>
    </Flex>
  );
};

export default Search;
